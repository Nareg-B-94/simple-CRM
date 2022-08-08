import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent implements OnInit {
  birthDate: Date;
  loading = false;
  user: User;
  userId :string;


  constructor(
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    public firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  saveUser() {
    this.loading = true;
    this.firestore.collection('users').doc(this.userId).update(this.user.toJSON()).then((result: any) => {
        this.loading = false;
        console.log('finished', result);
        this.dialogRef.close();
  });
}
}