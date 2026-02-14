"use client";

import React from 'react';
import { Header } from "./components/Header";
import ProfileContent from "./components/ProfileContent";
import { UpdateDate } from "./components/UpdateDate";

export default function Home() {
  return (
    <div className="min-h-screen pt-4 pb-12 md:pt-8 md:pb-20">
        <div className="container-custom">
            
            {/* Header / Nav */}
            <Header />

            {/* Main Content */}
            <main>
                <ProfileContent />
            </main>

            {/* Footer */}
            <footer className="mt-20 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-[var(--sub-text)]">
                    &copy; 2026 Daisuke Maekawa
                </p>
                <UpdateDate />
            </footer>
        </div>
    </div>
  );
}

