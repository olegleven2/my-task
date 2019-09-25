import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable-render',
  templateUrl: './variable-render.component.html',
  styleUrls: ['./variable-render.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariableRenderComponent implements OnInit {

  @Input() firstCount: number;
  @Input() secondCount: number;

  constructor() { }

  ngOnInit() {
  }

}
