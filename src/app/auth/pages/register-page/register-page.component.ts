import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder)

  public registerForm = this.fb.group({
    name    :['',[Validators.required]],
    email   :['',[Validators.required]],
    password:['',[Validators.required]],
  })

  public login(){
    console.log(this.registerForm.value);
  }
}
