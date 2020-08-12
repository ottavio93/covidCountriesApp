import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares: any[];
  winner: string;
  loser: string;
  inizio: boolean = false;
  xIsNext: boolean;
  ver: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  newGame() {
    this.inizio = true;
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }
  get player() {
    return this.xIsNext ? 'O' : 'X';
  }

  makeMove(idx: number) {
    var txt;
    var r;

    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner1();
    if (this.winner != null) {
      this.opensweetalertcst();
      this.newGame();
    }
    if (!this.squares.includes(null)) {
      this.opensweetalertcst1();
    }
  }
  function() {
    for (var i = 0; i < this.squares.length; ++i)
      if (!(i in this.squares)) {
        return true;
      }
    return false;
  }
  opensweetalertcst1() {
    Swal.fire({
      title: 'there is no winner',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'restart',
      cancelButtonText: 'exit',
    }).then((result) => {
      if (result.value) {
        this.newGame();
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        document.location.href = '//localhost:4200/board';
      }
    });
  }

  opensweetalertcst() {
    Swal.fire({
      title: 'the winner is: ' + this.winner,
      text: 'You will not be able to recover this imaginary file!',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'restart',
      cancelButtonText: 'exit',
    }).then((result) => {
      if (result.value) {
        this.newGame();
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        document.location.href = '//localhost:4200/board';
      }
    });
  }

  calculateWinner1() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
