import { CloseButton } from './CloseButton';

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header className="text-xl leading-6 ">
        Deixe seu feedback
        <CloseButton />
      </header>
      <p>Hello</p>
      <footer className="text-sm text-neutral-400">
        Made with ♥ by{' '}
        <a
          href="https://www.linkedin.com/in/mariagabrielareis/"
          className="underline underline-offset-2"
        >
          Maby
        </a>{' '}
        (and <a href="https://rocketseat.com.br">Rocketseat</a>)
      </footer>
    </div>
  );
}
