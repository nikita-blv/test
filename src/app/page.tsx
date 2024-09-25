import { Content } from '@root/components/Content';

export default async function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-items-center gap-16 p-5 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Content />
    </div>
  );
}
