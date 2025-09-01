export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-gold to-dark-gold opacity-60 rounded-full" />
          </div>

          <p className="text-sm opacity-90">© {currentYear} Κατερίνα Σκουλαρίκη — Συμβολαιογράφος Ξάνθης</p>

          <p className="text-sm opacity-80 mt-2">Ελ. Βενιζέλου 72-76, Ξάνθη</p>

          <p className="text-xs opacity-70 mt-2">Όλα τα δικαιώματα διατηρούνται</p>
        </div>
      </div>
    </footer>
  )
}
