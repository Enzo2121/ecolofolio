<template>
  <div class="space-y-8 max-w-3xl mx-auto">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">À Propos de Moi</div>
      <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">Enzo</h1>
      <p class="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Développeur Web & Étudiant en Informatique
      </p>
      <div class="flex items-center gap-4 mt-2">
        <a href="/cv.txt" download class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Télécharger CV
        </a>
        <a href="#contact" class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
          Me Contacter
        </a>
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-center">À Propos de Moi</h2>
      <div class="rounded-lg border bg-card p-6 shadow-sm">
        <p class="text-muted-foreground">
          Bonjour ! Je suis Enzo, un étudiant passionné d'informatique avec une spécialisation dans le développement web et mobile. Je me concentre sur la création d'applications fonctionnelles et esthétiques, avec une attention particulière à l'expérience utilisateur et l'accessibilité.
        </p>
        <p class="text-muted-foreground mt-4">
          J'ai commencé mon parcours en autodidacte avant de poursuivre mes études en informatique. Depuis, j'ai travaillé sur divers projets personnels et académiques qui m'ont permis de développer mes compétences techniques et ma créativité. Mon approche combine expertise technique et résolution créative de problèmes pour livrer des solutions qui sont à la fois élégantes et performantes.
        </p>
        <p class="text-muted-foreground mt-4">
          Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles technologies, de contribuer à des projets open-source, ou de pratiquer des activités sportives en plein air.
        </p>
      </div>
    </div>

    <!-- CV Visualizer -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-center">Curriculum Vitae</h2>
      <div class="rounded-lg border bg-card shadow-sm overflow-hidden">
        <div class="border-b border-border p-4 bg-muted/50 flex justify-between items-center">
          <h3 class="font-semibold">Enzo - CV</h3>
          <a href="/cv.txt" download class="inline-flex items-center text-sm font-medium text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Télécharger PDF
          </a>
        </div>
        <div class="p-6 space-y-6">
          <!-- Experience Section -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold border-b border-border pb-2">Expérience Professionnelle</h4>
            <div class="space-y-4">
              <div>
                <div class="flex flex-col justify-between gap-1 sm:flex-row">
                  <div>
                    <h5 class="font-semibold">Stagiaire Développeur Web</h5>
                    <p class="text-sm text-muted-foreground">Les Jolies Mancelles</p>
                  </div>
                  <div class="text-sm text-muted-foreground">Janvier 2023 - Mars 2023</div>
                </div>
                <ul class="mt-2 space-y-1 text-sm text-muted-foreground list-disc pl-5">
                  <li>Développement d'une plateforme e-commerce pour une entreprise locale de cosmétiques</li>
                  <li>Implémentation d'une interface utilisateur responsive avec Vue.js</li>
                  <li>Intégration de systèmes de paiement sécurisés</li>
                  <li>Optimisation des performances du site et du référencement</li>
                </ul>
              </div>
              <div>
                <div class="flex flex-col justify-between gap-1 sm:flex-row">
                  <div>
                    <h5 class="font-semibold">Développeur Web Junior</h5>
                    <p class="text-sm text-muted-foreground">Au Coeur Des Artistes</p>
                  </div>
                  <div class="text-sm text-muted-foreground">Juin 2023 - Août 2023</div>
                </div>
                <ul class="mt-2 space-y-1 text-sm text-muted-foreground list-disc pl-5">
                  <li>Collaboration au développement d'une plateforme numérique pour une galerie d'art</li>
                  <li>Création d'une galerie d'images interactive et responsive</li>
                  <li>Développement d'un système de gestion d'événements culturels</li>
                  <li>Travail en équipe avec des designers et d'autres développeurs</li>
                </ul>
              </div>
              <div>
                <div class="flex flex-col justify-between gap-1 sm:flex-row">
                  <div>
                    <h5 class="font-semibold">Projet Personnel</h5>
                    <p class="text-sm text-muted-foreground">Application Mobile Fitness</p>
                  </div>
                  <div class="text-sm text-muted-foreground">2022 - Présent</div>
                </div>
                <ul class="mt-2 space-y-1 text-sm text-muted-foreground list-disc pl-5">
                  <li>Développement d'une application mobile de suivi fitness avec React Native</li>
                  <li>Implémentation de fonctionnalités de suivi d'entraînement et d'analyse de progression</li>
                  <li>Intégration avec des APIs de santé pour le suivi des données</li>
                  <li>Publication sur les plateformes iOS et Android</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Education Section -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold border-b border-border pb-2">Formation</h4>
            <div>
              <div class="flex flex-col justify-between gap-1 sm:flex-row">
                <div>
                  <h5 class="font-semibold">Licence en Informatique</h5>
                  <p class="text-sm text-muted-foreground">Université du Mans</p>
                </div>
                <div class="text-sm text-muted-foreground">2021 - Présent</div>
              </div>
              <p class="mt-2 text-sm text-muted-foreground">
                Spécialisation en développement web et technologies mobiles. Projets académiques en programmation et conception d'applications.
              </p>
            </div>
          </div>

          <!-- Skills Section -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold border-b border-border pb-2">Compétences</h4>
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <h5 class="font-semibold">Compétences Techniques</h5>
                <ul class="mt-2 space-y-1 text-sm text-muted-foreground list-disc pl-5">
                  <li>HTML, CSS, JavaScript, TypeScript</li>
                  <li>Vue.js, Nuxt.js, React, React Native</li>
                  <li>Node.js, Express, Python</li>
                  <li>MongoDB, Firebase</li>
                  <li>Git, Docker, CI/CD</li>
                </ul>
              </div>
              <div>
                <h5 class="font-semibold">Compétences Personnelles</h5>
                <ul class="mt-2 space-y-1 text-sm text-muted-foreground list-disc pl-5">
                  <li>Résolution de problèmes</li>
                  <li>Travail d'équipe</li>
                  <li>Gestion de projet</li>
                  <li>Communication</li>
                  <li>Autonomie</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Languages Section -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold border-b border-border pb-2">Langues</h4>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="flex items-center justify-between">
                <span class="font-medium">Français</span>
                <span class="text-sm text-muted-foreground">Langue maternelle</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-medium">Anglais</span>
                <span class="text-sm text-muted-foreground">Courant</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-medium">Espagnol</span>
                <span class="text-sm text-muted-foreground">Intermédiaire</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-medium">Allemand</span>
                <span class="text-sm text-muted-foreground">Notions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div id="contact" class="space-y-4">
      <h2 class="text-2xl font-bold text-center">Me Contacter</h2>
      <div class="rounded-lg border bg-card p-6 shadow-sm">
        <div class="grid gap-6 md:grid-cols-2">
          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-medium">Téléphone</h3>
                <p class="mt-1 text-sm text-muted-foreground">+33 6 12 34 56 78</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-medium">Email</h3>
                <p class="mt-1 text-sm text-muted-foreground">enzo.etudiant@example.com</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 class="font-medium">Localisation</h3>
                <p class="mt-1 text-sm text-muted-foreground">Le Mans, France</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 9l5 5 5-5"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-medium">Réseaux Sociaux</h3>
                <div class="mt-1 flex space-x-3">
                  <a href="#" class="text-muted-foreground hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" class="text-muted-foreground hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a href="#" class="text-muted-foreground hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 