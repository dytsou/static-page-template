#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
const html = readFileSync('public/index.html', 'utf8').replaceAll(
  '{{TITLE}}',
  process.env.PAGE_TITLE || 'My Page'
);
writeFileSync('dist/index.html', html);
console.log('✓ Wrote dist/index.html');
