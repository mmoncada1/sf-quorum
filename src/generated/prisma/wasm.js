
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.SupervisorScalarFieldEnum = {
  id: 'id',
  legistarId: 'legistarId',
  slug: 'slug',
  fullName: 'fullName',
  district: 'district',
  title: 'title',
  party: 'party',
  active: 'active',
  photoUrl: 'photoUrl',
  bio: 'bio',
  email: 'email',
  website: 'website',
  termStart: 'termStart',
  termEnd: 'termEnd',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MatterScalarFieldEnum = {
  id: 'id',
  legistarId: 'legistarId',
  legistarGuid: 'legistarGuid',
  file: 'file',
  type: 'type',
  status: 'status',
  title: 'title',
  summary: 'summary',
  summarySource: 'summarySource',
  fullText: 'fullText',
  introDate: 'introDate',
  finalDate: 'finalDate',
  sourceUrl: 'sourceUrl',
  inControl: 'inControl',
  originTimeline: 'originTimeline',
  originGeneratedAt: 'originGeneratedAt',
  importance: 'importance',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MatterAttachmentScalarFieldEnum = {
  id: 'id',
  matterId: 'matterId',
  name: 'name',
  url: 'url'
};

exports.Prisma.MatterRelationScalarFieldEnum = {
  id: 'id',
  fromId: 'fromId',
  toFile: 'toFile',
  toLegistarId: 'toLegistarId'
};

exports.Prisma.MeetingScalarFieldEnum = {
  id: 'id',
  legistarId: 'legistarId',
  legistarGuid: 'legistarGuid',
  bodyName: 'bodyName',
  date: 'date',
  location: 'location',
  sourceUrl: 'sourceUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ActionScalarFieldEnum = {
  id: 'id',
  legistarId: 'legistarId',
  legistarGuid: 'legistarGuid',
  date: 'date',
  actionText: 'actionText',
  result: 'result',
  bodyName: 'bodyName',
  matterId: 'matterId',
  meetingId: 'meetingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VoteScalarFieldEnum = {
  id: 'id',
  value: 'value',
  actionId: 'actionId',
  matterId: 'matterId',
  supervisorId: 'supervisorId',
  createdAt: 'createdAt'
};

exports.Prisma.SponsorshipScalarFieldEnum = {
  id: 'id',
  role: 'role',
  matterId: 'matterId',
  supervisorId: 'supervisorId'
};

exports.Prisma.TopicScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  name: 'name',
  emoji: 'emoji',
  color: 'color'
};

exports.Prisma.MatterTopicScalarFieldEnum = {
  matterId: 'matterId',
  topicId: 'topicId',
  weight: 'weight'
};

exports.Prisma.SupervisorStatScalarFieldEnum = {
  supervisorId: 'supervisorId',
  totalVotes: 'totalVotes',
  ayes: 'ayes',
  noes: 'noes',
  absences: 'absences',
  attendanceRate: 'attendanceRate',
  dissentRate: 'dissentRate',
  sponsored: 'sponsored',
  cosponsored: 'cosponsored',
  passedSponsored: 'passedSponsored',
  impactScore: 'impactScore',
  activityScore: 'activityScore',
  independence: 'independence',
  overallScore: 'overallScore',
  rank: 'rank',
  grade: 'grade',
  topTopicsJson: 'topTopicsJson',
  updatedAt: 'updatedAt'
};

exports.Prisma.IngestLogScalarFieldEnum = {
  id: 'id',
  startedAt: 'startedAt',
  finishedAt: 'finishedAt',
  meetings: 'meetings',
  matters: 'matters',
  actions: 'actions',
  votes: 'votes',
  note: 'note'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Supervisor: 'Supervisor',
  Matter: 'Matter',
  MatterAttachment: 'MatterAttachment',
  MatterRelation: 'MatterRelation',
  Meeting: 'Meeting',
  Action: 'Action',
  Vote: 'Vote',
  Sponsorship: 'Sponsorship',
  Topic: 'Topic',
  MatterTopic: 'MatterTopic',
  SupervisorStat: 'SupervisorStat',
  IngestLog: 'IngestLog'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
