/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: KObroPzbr2uDizQ3V/zojXYRxwFHZsovZxIUP7xKlcwb1a1/koGwqSDiho7B/Q8P4sRrIgofP4W5CAKI9fDQgA==
 */

/* eslint-disable */
// tslint:disable

import Departments, {Departments_InsertParameters} from './departments'
import Users, {Users_InsertParameters} from './users'

interface DatabaseSchema {
  departments: {record: Departments, insert: Departments_InsertParameters};
  users: {record: Users, insert: Users_InsertParameters};
}
export default DatabaseSchema;

function serializeValue(_tableName: string, _columnName: string, value: unknown): unknown {
  return value;
}
export {serializeValue}