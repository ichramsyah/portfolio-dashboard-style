import React from 'react';
import { svgIcons } from './svgIcons';

const SocialCards = () => {
  return (
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Gmail */}
      <div class="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md p-6 md:col-span-2  bg-gradient-to-b from-red-700 to-red-900">
        <div class="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/9">{svgIcons.gmail.bgGmail}</div>
        <div class="text-red-300 z-10 flex flex-col justify-between gap-y-2">
          <h4 class="text-lg font-semibold tracking-wide">Stay in Touch</h4>
          <p class="pb-2 text-xs">Reach out via email for any inquiries or collaborations.</p>
          <a href="mailto:ichramsyahabdurrachman@gmail.com" target="_blank" class="bg-red-300/80 hover:bg-red-300 rounded-md px-4 py-2 transition duration-100 md:w-max ">
            <div class="flex items-center justify-center gap-x-2 text-black">
              <p class="text-sm font-medium">Go to gmail</p>
              {svgIcons.common}
            </div>
          </a>
        </div>
        <div class="flex items-end justify-end">
          <div class="rounded-2xl border-8 p-2 text-neutral-50 bg-transparent border-red-300/20">{svgIcons.gmail.iconGmail}</div>
        </div>
      </div>

      {/* Instagram */}
      <div class="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md p-6 bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500">
        <div class="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/9">{svgIcons.instagram.bgInstagram}</div>
        <div class="text-purple-200 z-10 flex flex-col justify-between gap-y-2">
          <h4 class="text-lg font-semibold tracking-wide">Follow My Journey</h4>
          <p class="pb-2 text-xs">Stay updated with my latest posts and stories on Instagram.</p>
          <a href="https://www.instagram.com/ichramabdr/" class="bg-purple-200/80 hover:bg-purple-200 rounded-md px-4 py-2 transition duration-200 md:w-max ">
            <div target="_blank" class="flex items-center justify-center gap-x-2  text-black">
              <p class="text-sm font-medium">
                Go to <span class="capitalize">instagram</span>
              </p>
              {svgIcons.common}
            </div>
          </a>
        </div>
        <div class="flex items-end justify-end">
          <div class="rounded-2xl border-8 border-opacity-10 p-2 text-neutral-50 bg-transparent border-purple-200/20">{svgIcons.instagram.iconInstagram}</div>
        </div>
      </div>

      {/* LinkedIn */}
      <div class="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md p-6 undefined  bg-gradient-to-b from-sky-700 to-sky-900">
        <div class="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/8">{svgIcons.linkedIn.bgLinkedin}</div>
        <div class="text-sky-300 z-10 flex flex-col justify-between gap-y-2">
          <h4 class="text-lg font-semibold tracking-wide">Let's Connect</h4>
          <p class="pb-2 text-xs">Connect for collaboration or explore my professional experience.</p>
          <a href="https://www.linkedin.com/in/ichramsyah-abdurrachman-49a131280/" class="bg-sky-300/80 hover:bg-sky-300 rounded-md px-4 py-2 transition duration-200 md:w-max ">
            <div target="_blank" class="flex items-center justify-center gap-x-2  text-black">
              <p class="text-sm font-medium">
                Go to <span class="capitalize">linkedin</span>
              </p>
              {svgIcons.common}
            </div>
          </a>
        </div>
        <div class="flex items-end justify-end">
          <div class="rounded-2xl border-8 p-2 text-neutral-50 bg-transparent border-sky-300/20">{svgIcons.linkedIn.iconLinkedIn}</div>
        </div>
      </div>

      {/* tiktok */}
      <div class="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md p-6 undefined  bg-gradient-to-b from-neutral-700 to-neutral-900">
        <div class="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/4">{svgIcons.tiktok.bgTiktok}</div>
        <div class="text-neutral-400 z-10 flex flex-col justify-between gap-y-2">
          <h4 class="text-lg font-semibold tracking-wide">Join the Fun</h4>
          <p class="pb-2 text-xs">Follow me on TikTok for entertaining and engaging content.</p>
          <a href="https://www.tiktok.com/@diakuaku/" class="bg-neutral-400/80 hover:bg-neutral-400 rounded-md  px-4 py-2 transition duration-100 md:w-max ">
            <div target="_blank" class="flex items-center justify-center gap-x-2  text-black">
              <p class="text-sm font-medium">
                Go to <span class="capitalize">tiktok</span>
              </p>
              {svgIcons.common}
            </div>
          </a>
        </div>
        <div class="flex items-end justify-end">
          <div class="rounded-2xl border-8 p-2 text-neutral-50 bg-transparent border-neutral-400/20">{svgIcons.tiktok.iconTiktok}</div>
        </div>
      </div>

      {/*  */}
      <div class="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md p-6 undefined  bg-gradient-to-b from-slate-900 to-slate-950">
        <div class="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/8">{svgIcons.github.bgGithub}</div>
        <div class="text-slate-400 z-10 flex flex-col justify-between gap-y-2">
          <h4 class="text-lg font-semibold tracking-wide">Explore the Code</h4>
          <p class="pb-2 text-xs">Explore the source code for all my projects on GitHub.</p>
          <a href="https://github.com/ichramsyah" class="bg-slate-400/80 hover:bg-slate-400 rounded-md px-4 py-2 transition duration-100 md:w-max ">
            <div target="_blank" class="flex items-center justify-center gap-x-2  text-black">
              <p class="text-sm font-medium">
                Go to <span class="capitalize">github</span>
              </p>
              {svgIcons.common}
            </div>
          </a>
        </div>
        <div class="flex items-end justify-end">
          <div class="rounded-2xl border-8 p-2 text-neutral-50 bg-transparent border-slate-400/20">{svgIcons.github.iconGithub}</div>
        </div>
      </div>
    </div>
  );
};

export default SocialCards;
