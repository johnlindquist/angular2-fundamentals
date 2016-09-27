import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>
      {{message}} hmm
    </p>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  message = `I wake up in the morning and I step outside`;

  constructor() { }

  ngOnInit() {
  }

}
