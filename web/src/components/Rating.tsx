import { Star } from 'lucide-react';

type RatingProps = {
  rating: number;
};

export function Rating({ rating }: RatingProps) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <Star key={i} className="text-zinc-500 size-5 fill-current" />
      );
    } else if (i - rating < 1) {
      stars.push(
        <Star
          key={i}
          className="text-zinc-500 size-5"
          style={{
            clipPath: 'inset(0 50% 0 0)',
          }}
        />
      );
    } else {
      stars.push(
        <Star key={i} className="text-zinc-300 size-5" />
      );
    }
  }

  return (
    <div className="flex items-center my-1">
      <span className='mr-1'>Avaliação:</span>
      {stars}
    </div>
  );
}
