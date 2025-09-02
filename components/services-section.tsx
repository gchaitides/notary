import { Card, CardContent } from "@/components/ui/card"

interface ServicesSectionProps {
  id?: string
}

const services = [
  {
    title: "Δίκαιο Ακινήτων",
    items: [
      "Αγοραπωλησίες",
      "Γονικές Παροχές",
      "Δωρεές",
      "Προσύμφωνα",
      "Εργολαβικά Συμβόλαια",
      "Διανομές – Ανταλλαγές",
      "Μισθωτήρια Συμβόλαια",
      "Συστάσεις Οριζ. – Καθ. Ιδιοκτησίας – Κανονισμοί Σχέσεων Συνιδιοκτητών",
      "Πράξεις Θέσης Χωρών Στάθμευσης Σε Εξυπηρέτηση Κτιρίου – Ν.1221/1981",
      "Πράξεις Παραχώρησης – Εξάλειψης Υποθήκης",
      "Λοιπές Συμβολαιογραφικές Πράξεις",
    ],
  },
  {
    title: "Κληρονομικό Δίκαιο",
    items: [
      "Δημόσιες διαθήκες – Πράξεις κατάθεσης/ανάληψης ιδιόγραφης-μυστικής διαθήκης",
      "Πράξεις αποδοχής κληρονομιάς",
      "Πράξεις απογραφής κληρονομιάς (αποδοχή με το ευεργέτημα της απογραφής)",
    ],
  },
  {
    title: "Οικογενειακό Δίκαιο",
    items: [
      "Σύμφωνα συμβίωσης",
      "Πράξεις για την ιατρικώς υποβοηθούμενη ανθρώπινη αναπαραγωγή",
      "Συμβόλαια κοινοκτημοσύνης",
      "Πράξεις αναγνώρισης τέκνου",
    ],
  },
  {
    title: "Αστικό Δίκαιο – Γενικές Αρχές",
    items: [
      "Πληρεξούσια",
      "Πράξεις έγκρισης αντιπροσωπευόμενου",
      "Πράξεις ανάκλησης πληρεξούσιου",
      "Σύσταση ιδρυμάτων",
    ],
  },
  {
    title: "Ενοχικό Δίκαιο",
    items: [
      "Νέες μορφές συμβάσεων",
      "Συμβάσεις μεταβίβασης περιουσίας – 367 Α.Κ.",
      "Πράξεις κατάθεσης – θεώρησης ιδιωτικού εγγράφου για την πρόσδοση βέβαιης χρονολογίας",
      "Δίκαιο αναγκαστικής εκτέλεσης",
      "Έκδοση απογράφων",
      "Πράξεις συναίνεσης σε άρση κατάσχεσης",
    ],
  },
  {
    title: "Δίκαιο Πνευματικής Ιδιοκτησίας",
    items: [],
  },
  {
    title: "Συμβουλευτικές Υπηρεσίες",
    items: [],
  },
]

export function ServicesSection({ id }: ServicesSectionProps) {
  return (
    <section
      id={id}
      className="py-20 section-black scroll-section relative"
      style={{
        backgroundImage: "url('/images/textured-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/10 md:bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-center text-gold mb-16">
            Οι Υπηρεσίες μας με μια ματιά
          </h2>

          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-transparent hover:border-transparent transition-all duration-300 bg-black-card backdrop-blur-sm hover:shadow-lg hover:shadow-gold/10 relative overflow-hidden break-inside-avoid mb-8"
                style={{
                  borderImage: "linear-gradient(135deg, #B8860B, #DAA520, #CD853F) 1",
                }}
              >
                <div className="absolute top-4 right-4 transition-opacity duration-300">
                  <img src="/images/quill-icon.png" alt="Quill pen icon" className="w-12 h-12 object-contain" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-medium text-gold mb-4 text-balance pr-12">{service.title}</h3>
                  {service.items.length > 0 ? (
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-foreground/80 leading-relaxed text-pretty flex items-start">
                          <img
                            src="/images/quill-icon.png"
                            alt="Quill pen icon"
                            className="w-5 h-5 object-contain mr-3 mt-1 flex-shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-foreground/60 italic"> </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
