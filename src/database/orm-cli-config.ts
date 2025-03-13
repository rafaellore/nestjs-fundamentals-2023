import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1694705312546 } from 'src/migrations/1741461533195-createCoursesTable';
import { CreateTagsTable1741464523004 } from 'src/migrations/1741464523004-createTagsTable';
import { CreateCoursesTagsTable1695042750118 } from 'src/migrations/1741638924858-createCoursesTagsTable.ts';
import { AddCoursesIdToCoursesTagsTable1741640205560 } from 'src/migrations/1741640205560-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1741699590682 } from 'src/migrations/1741699590682-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'devtraining',
  entities: [Course, Tag],
  synchronize: false,
};

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
