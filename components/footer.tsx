export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          {"Designed & Built by Prisha Singhania"}
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/prishadsinghania" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/prisha-singhania-data-analytics/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary">
            LinkedIn
          </a>
          <a href="https://medium.com/@prishadsinghania" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary">
            Medium
          </a>
          <a href="mailto:prishadsinghania@gmail.com" className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
