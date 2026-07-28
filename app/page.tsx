'use client';

import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, TrendingUp } from "lucide-react";
import SiteLayout from "./components/layout/SiteLayout";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";

const highlights = [
	{
		title: "Productos",
		description:
			"Explora café, cacao, suplementos y cosmética en un catálogo organizado por categorías.",
		href: "/productos",
		icon: Leaf,
	},
	{
		title: "Nosotros",
		description:
			"Conoce la historia, los ingredientes y la propuesta de bienestar de Lo d' Keren.",
		href: "/nosotros",
		icon: Sparkles,
	},
	{
		title: "Negocio",
		description:
			"Descubre cómo convertir salud, confianza y comunidad en una oportunidad de ingresos.",
		href: "/negocio",
		icon: TrendingUp,
	},
];

export default function HomePage() {
	return (
		<SiteLayout>
			<main className="min-h-screen bg-white w-full overflow-x-hidden">
				<Hero />

				<section className="py-20 sm:py-28 bg-gradient-to-b from-white via-brand-cream/20 to-white">
					<div className="container mx-auto px-4">
						<div className="rounded-[2rem] border border-brand-gold/20 bg-gradient-to-br from-brand-brown via-[#7a5b44] to-brand-brown p-8 shadow-xl sm:p-10 lg:p-14">
							<div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
								<div className="text-white">
									<span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-cream">
										Café y Té de Excelencia
									</span>
									<h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
										Bebidas funcionales para acompañar tu día y potenciar tu
										bienestar
									</h2>
									<p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-cream/90 sm:text-base md:text-lg">
										En Lo d' Keren destacamos productos de café y té pensados
										para quienes buscan una opción más natural, práctica y con
										identidad. Ideal para disfrutar en casa, compartir con
										amigos o incorporar a una rutina diaria con propósito.
									</p>

									<div className="mt-8 flex flex-wrap gap-3">
										<Link
											href="/productos"
											className="rounded-full bg-white px-5 py-3 font-semibold text-brand-brown transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
										>
											Ver productos
										</Link>
										{/* <Link
											href="/negocio"
											className="rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/20"
										>
											Conocer la oportunidad
										</Link> */}
									</div>
								</div>

								<div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
									<div className="space-y-4">
										<div className="rounded-2xl border border-white/15 bg-white/15 p-4">
											<h3 className="font-serif text-xl text-white">
												Café con propósito
											</h3>
											<p className="mt-2 text-sm leading-relaxed text-brand-cream/90">
												Una bebida diaria que combina practicidad, sabor y una
												propuesta diferente para quienes quieren cuidar su estilo
												de vida.
											</p>
										</div>
										<div className="rounded-2xl border border-white/15 bg-white/15 p-4">
											<h3 className="font-serif text-xl text-white">
												Té para disfrutar y compartir
											</h3>
											<p className="mt-2 text-sm leading-relaxed text-brand-cream/90">
												Opciones ideales para momentos de pausa, bienestar y
												conexión, con un enfoque natural y elegante.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Features />
				<Testimonials />
			</main>
		</SiteLayout>
	);
}