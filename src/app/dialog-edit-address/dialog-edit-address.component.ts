import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent implements OnInit {
  loading = false;
  user: User;
  userId: string;

  constructor(
    public dialogRef: MatDialogRef<DialogEditAddressComponent>,
    public firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON()).then((result: any) => {
        this.loading = false;
        console.log('finished', result);
        this.dialogRef.close();
      });
  }
}
