import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { pageTree } from '@/app/source';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'Monarch ORM',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
  sidebar: {
    // banner: (
    //   <RootToggle
    //     options={[
    //       {
    //         icon: <></>,
    //         title: 'Core Docs',
    //         description: 'Documentation for Monarch ORM',
    //         url: '/docs',
    //       },
    //       {
    //         icon: <></>,
    //         title: 'Folder 2',
    //         description: 'Pages in folder 2',
    //         url: '/docs/studio',
    //       },
    //     ]}
    //   />
    // ),
  }
};
