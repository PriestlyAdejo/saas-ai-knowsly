'use client';

import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const testimonials = [
  {
    name: 'Jane',
    avatar: 'B',
    title: 'Digital Artist',
    description:
      'The AI image generator is a game-changer! It saves me so much time and sparks my creativity.',
  },
  {
    name: 'John',
    avatar: 'C',
    title: 'Music Producer',
    description:
      "The AI music generator produces mind-blowing beats and melodies. It's like having a music genius at my fingertips!",
  },
  {
    name: 'Alex',
    avatar: 'D',
    title: 'Video Content Creator',
    description:
      'The AI video generator is pure magic! It helps me create engaging videos without breaking a sweat.',
  },
  {
    name: 'Emily',
    avatar: 'E',
    title: 'Software Engineer',
    description:
      'The AI code generator is a lifesaver! It writes code faster and more accurately than I ever could.',
  },
  {
    name: 'Michael',
    avatar: 'F',
    title: 'AI Enthusiast',
    description:
      'This AI chatbot is mind-blowing! It understands me better than some humans do.',
  },
  {
    name: 'Sophia',
    avatar: 'G',
    title: 'Content Writer',
    description:
      'The AI language generator is a true wordsmith! It crafts eloquent prose that captivates readers.',
  },
];

export const LandingContent = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192239] border-none text-white m-2"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.name}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
