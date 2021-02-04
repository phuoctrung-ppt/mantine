import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExternalLinkIcon, CalendarIcon } from '@modulz/radix-icons';
import { OPEN_COLOR_THEMES, Size } from '@mantine/types';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import Button from './Button';

const md = OPEN_COLOR_THEMES.map((theme) => (
  <Button color={theme} key={theme} size="md">
    {theme} md
  </Button>
));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as Size[]).map((size) => (
  <Button color="blue" key={size} size={size}>
    Button {size}
  </Button>
));

storiesOf('@mantine/core/Button', module).add('General usage', () => (
  <>
    <ElementsGroup>
      <Button style={{ marginTop: 10 }} disabled>
        Disabled
      </Button>
    </ElementsGroup>

    <ElementsGroup style={{ marginTop: 10 }}>
      <Button>White (default)</Button>
      {md}
    </ElementsGroup>

    <ElementsGroup style={{ marginTop: 10 }}>{sizes}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>
      <Button color="blue" leftIcon={<CalendarIcon style={{ width: 14, height: 14 }} />}>
        Book meeting
      </Button>

      <Button size="xl" color="blue" leftIcon={<CalendarIcon style={{ height: 18, width: 18 }} />}>
        Book meeting
      </Button>

      <Button
        disabled
        size="xl"
        color="blue"
        leftIcon={<CalendarIcon style={{ height: 18, width: 18 }} />}
      >
        Book meeting
      </Button>

      <Button rightIcon={<ExternalLinkIcon style={{ width: 13, height: 13 }} />}>
        Open in new tab
      </Button>
    </ElementsGroup>
  </>
));
