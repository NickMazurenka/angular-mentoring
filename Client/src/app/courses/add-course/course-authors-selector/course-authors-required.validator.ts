import { AbstractControl, ValidationErrors } from '@angular/forms';

export function CourseAuthorsRequired(control: AbstractControl): ValidationErrors | null {
  if (control.value != null && control.value.length > 0) {
    return null;
  }
  return { authorRequired: true };
}
