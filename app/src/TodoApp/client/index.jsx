import { Accounts } from 'meteor/accounts-base';
import 'TodoApp/methods/methods';

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});