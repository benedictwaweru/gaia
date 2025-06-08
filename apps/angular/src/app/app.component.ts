/***********************************************************************************************
 * Copyright (c) 2025. All rights reserved.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 * This file is part of the Gaia project, which is released under the MIT License.
 ***********************************************************************************************/

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PrimeNG } from 'primeng/config';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private primeng: PrimeNG) { }

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
