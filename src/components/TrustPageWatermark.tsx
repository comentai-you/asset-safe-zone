interface TrustPageWatermarkProps {
  ownerPlan: string | null;
}

/**
 * Watermark flutuante (barra fixa) DESABILITADA.
 * Mantemos o componente apenas por compatibilidade caso alguma view antiga ainda importe.
 */
const TrustPageWatermark = (_props: TrustPageWatermarkProps) => {
  return null;
};

export default TrustPageWatermark;
