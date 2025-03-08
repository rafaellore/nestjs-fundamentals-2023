import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1694705312546 } from 'src/migrations/1741461533195-createCoursesTable';
import { CreateTagsTable1741464523004 } from 'src/migrations/1741464523004-createTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1694705312546, CreateTagsTable1741464523004],
});
