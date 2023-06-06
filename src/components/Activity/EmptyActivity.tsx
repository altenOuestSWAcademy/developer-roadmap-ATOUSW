import CheckIcon from '../../icons/roadmap.svg';
import translations from '../../translations.json';

export function EmptyActivity() {
  return (
    <div class="rounded-md">
      <div class="flex flex-col items-center p-7 text-center">
        <img
          alt="no roadmaps"
          src={CheckIcon}
          class="mb-2 h-[60px] w-[60px] opacity-10 sm:h-[120px] sm:w-[120px]"
        />
        <h2 class="text-lg font-bold sm:text-xl">{translations.noProgress}</h2>
        <p className="my-1 max-w-[400px] text-sm text-gray-500 sm:my-2 sm:text-base">
          Progress will appear here as you start tracking your{' '}
          <a href="/roadmaps" class="mt-4 text-blue-500 hover:underline">
            Roadmaps
          </a>{' '}
          or{' '}
          <a href="/best-practices" class="mt-4 text-blue-500 hover:underline">
            Best Practices
          </a>{' '}
          progress.
        </p>
      </div>
    </div>
  );
}