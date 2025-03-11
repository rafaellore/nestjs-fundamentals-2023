import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1694705312546 } from 'src/migrations/1741461533195-createCoursesTable';
import { CreateTagsTable1741464523004 } from 'src/migrations/1741464523004-createTagsTable';
import { CreateCoursesTagsTable1695042750118 } from 'src/migrations/1741638924858-createCoursesTagsTable.ts';
import { AddCoursesIdToCoursesTagsTable1741640205560 } from 'src/migrations/1741640205560-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1741699590682 } from 'src/migrations/1741699590682-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1694705312546,
    CreateTagsTable1741464523004,
    CreateCoursesTagsTable1695042750118,
    AddCoursesIdToCoursesTagsTable1741640205560,
    AddTagsIdToCoursesTagsTable1741699590682,
  ],
});
