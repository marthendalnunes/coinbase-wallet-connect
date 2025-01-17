export function Footer() {
  return (
    <footer className="absolute flex justify-center w-full bottom-6">
      <span className="flex text-lg gap-1.5">
        <p>Made with ♥️ by </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline underline-offset-2"
          href="https://github.com/marthendalnunes"
        >
          Vitor Marthendal
        </a>
      </span>
    </footer>
  );
}
