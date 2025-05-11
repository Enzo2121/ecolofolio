<template>
  <div class="container mx-auto px-4 space-y-12">
    <section class="flex flex-col items-center justify-center space-y-4 text-center py-12 md:py-20">
      <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Bienvenue sur mon portfolio</div>
      <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl md:max-w-4xl">
        Enzo Eliazord, étudiant en BTS SIO
      </h1>
      <p class="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Un étudiant en informatique spécialisé dans le développement web.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <NuxtLink to="/projects" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Voir mes Projets
        </NuxtLink>
        <NuxtLink to="/internships" class="inline-flex h-10 items-center justify-center rounded-md bg-primary/80 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Voir mes Stages
        </NuxtLink>
        <NuxtLink to="/cv" class="inline-flex h-10 items-center justify-center rounded-md bg-primary/80 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Voir mon CV
        </NuxtLink>

      </div>
    </section>

    <section class="space-y-6 flex flex-col items-center">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Compétences</div>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Ce que je fais</h2>
        <p class="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
          Voici quelques-unes des technologies et compétences dans lesquelles je me spécialise.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <div class="rounded-lg border bg-card p-6 shadow-sm">
          <div class="flex items-center space-x-4">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <h3 class="font-semibold">Développement Frontend</h3>
          </div>
          <p class="mt-3 text-sm text-muted-foreground">
            Création d'interfaces web responsives et accessibles en utilisant des frameworks modernes.
          </p>
        </div>
        <div class="rounded-lg border bg-card p-6 shadow-sm">
          <div class="flex items-center space-x-4">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M2 9.5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5"></path>
                <path d="M2 14.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5"></path>
                <rect x="2" y="9.5" width="20" height="5" rx="0.5"></rect>
              </svg>
            </div>
            <h3 class="font-semibold">Développement Backend</h3>
          </div>
          <p class="mt-3 text-sm text-muted-foreground">
            Développement en PHP pour créer des solutions web dynamiques et performantes.
          </p>
        </div>
        <div class="rounded-lg border bg-card p-6 shadow-sm">
          <div class="flex items-center space-x-4">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <h3 class="font-semibold">Design UI/UX</h3>
          </div>
          <p class="mt-3 text-sm text-muted-foreground">
            Conception d'interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale sur Figma.
          </p>
        </div>
      </div>
    </section>
  </div>
</template> 