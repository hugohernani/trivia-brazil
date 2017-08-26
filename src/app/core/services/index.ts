import {CategoryService} from './category.service';
import {TagService} from './tag.service';
import {QuestionService} from './question.service';
import {AuthenticationService} from './authentication.service';
import {AuthGuard} from './auth-guard.service';

export {
    CategoryService,
    TagService,
    QuestionService,
    AuthenticationService,
    AuthGuard
};

export default [
    CategoryService,
    TagService,
    QuestionService,
    AuthenticationService,
    AuthGuard
];
