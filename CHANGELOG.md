Changelog for chessops
======================

v0.3.6
------

* Fixed alternative queenside castling moves (king moved by two squares instead
  of onto rook). These moves were not correctly classified, normalized or
  played.

v0.3.5
------

* Added `compat` module for
  [chessground](https://github.com/ornicar/chessground) and
  [scalachess](https://github.com/ornicar/scalachess) interoperability.
* Added `Position.castlingSide()`.
* Added `Position.normalizeMove()`.
* Overloaded `parseSquare()` for known valid `SquareName`.

v0.3.4
------

* Fixed castling paths in `Castles.default()` and `Chess.default()`, leading
  to illegal king moves.

v0.3.3
------

* Fixed Racing Kings move generation with king near goal.
* Pawn drops in Crazyhouse reset `pos.halfmoves`.

v0.3.2
------

* Fixed SAN of en passant captures.

v0.3.1
------

* Optimize SAN disambiguation by adding a fast path for unambiguous moves.

v0.3.0
------

* Renamed `san.makeVariationSan()` to `san.makeSanVariation()`.
* Fixed SAN disambiguation on b and c file.

v0.2.0
------

* Fixed check from a1.
* Fixed insufficient material with same-color bishops.
* Fixed Crazyhouse validation and limit pocket size.
* Fixed `Position.fromSetup()` entangles position with setup.
* Made `Position.rules()` a read-only property `Position.rules`.
* Removed `SquareSet.subsets()`.
* Removed `utils.strRepeat()`.
* Micro optimizations and misc non-functional tweaks.

v0.1.0
------

* First release.
