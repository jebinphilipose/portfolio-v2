export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="fixed inset-0 z-[9998] bg-bg-light/75 dark:bg-bg-dark/75 flex items-center justify-center p-6"
    >
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <div
          aria-hidden="true"
          className="motion-safe:animate-spin rounded-full border-4 border-primary/20 border-t-primary h-12 w-12 sm:h-14 sm:w-14"
        />

        <p className="text-base sm:text-lg font-bold" style={{ color: 'var(--heading-text)' }}>
          Loading...
        </p>
      </div>
    </div>
  )
}

