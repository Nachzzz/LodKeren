import SiteLayout from '../components/layout/SiteLayout';
import Business from '../components/sections/Business';

export default function NegocioPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-white">
        <Business />
      </main>
    </SiteLayout>
  );
}
