import SiteLayout from '../components/layout/SiteLayout';
import About from '../components/sections/About';

export default function NosotrosPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-white">
        <About />
      </main>
    </SiteLayout>
  );
}
