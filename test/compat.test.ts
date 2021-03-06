import { parseUci } from '../src/util';
import { parseFen } from '../src/fen';
import { Chess } from '../src/chess';
import { chessgroundDests, uciCharPair } from '../src/compat';

test('chessground dests with Kh8', () => {
  const setup = parseFen('r1bq1r2/3n2k1/p1p1pp2/3pP2P/8/PPNB2Q1/2P2P2/R3K3 b Q - 1 22').unwrap();
  const pos = Chess.fromSetup(setup).unwrap();
  const dests = chessgroundDests(pos);
  expect(dests['g7']).toContain('h8');
  expect(dests['g7']).not.toContain('g8');
});

test('uci char pair', () => {
  // regular moves
  expect(uciCharPair(parseUci('a1b1')!)).toBe('#$');
  expect(uciCharPair(parseUci('a1a2')!)).toBe('#+');
  expect(uciCharPair(parseUci('h7h8')!)).toBe('Zb');

  // promotions
  expect(uciCharPair(parseUci('b7b8q')!)).toBe('Td');
  expect(uciCharPair(parseUci('b7c8q')!)).toBe('Te');
  expect(uciCharPair(parseUci('b7c8n')!)).toBe('T}');

  // drops
  expect(uciCharPair(parseUci('P@a1')!)).toBe('#\x8f');
  expect(uciCharPair(parseUci('Q@h8')!)).toBe('b\x8b');
});
