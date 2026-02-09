"use client";

import Link from 'next/link';
import Image from 'next/image';
import Container from './components/Container';
import Logo from './components/Logo';
import NavbarApp from './components/NavbarApp';

export default function NotFound() {
  return (
    <Container bgColor="#0d090e">
      <div className="min-h-[87.5vh] flex items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <Image
            src="/Discipulus - Logo Small.png"
            alt="404 Door"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">404</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">Page Not Found</h2>
          <p className="text-[#ddd] mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link 
            href="/"
            className="inline-block bg-white text-black px-6 py-2 rounded-[75px] font-semibold hover:bg-opacity-90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </Container>
  );
}