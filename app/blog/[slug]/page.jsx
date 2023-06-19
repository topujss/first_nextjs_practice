export function generateMetadata({ params }) {
  return {
    title: params.slug,
    description: `Welcome to ${params.slug} page`,
  };
}
export default function page({ params }) {
  return <h1>post page - {params.slug}</h1>;
}
