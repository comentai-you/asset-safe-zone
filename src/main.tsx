import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App.tsx";
import "./index.css";

const hardResetPwaCaches = async () => {
  try {
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }

    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
  } catch (err) {
    console.warn("[PWA] hard reset failed", err);
  }
};

const bootstrap = async () => {
  const url = new URL(window.location.href);

  // Acesse qualquer página com ?tp_force_update=1 para forçar atualização no domínio (inclui custom domains)
  if (url.searchParams.has("tp_force_update")) {
    await hardResetPwaCaches();
    url.searchParams.delete("tp_force_update");
    window.location.replace(url.toString());
    return;
  }

  // Registra o SW manualmente e aplica updates automaticamente quando houver versão nova
  const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
      void updateSW(true);
    },
    onRegisterError(error) {
      console.warn("[PWA] register error", error);
    },
  });

  createRoot(document.getElementById("root")!).render(<App />);
};

void bootstrap();

