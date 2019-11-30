import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};


export type Mutation = {
   __typename?: 'Mutation',
  addUser?: Maybe<User>,
  updateUser?: Maybe<User>,
  delUser?: Maybe<User>,
  addUserFeed?: Maybe<UserFeed>,
  updateUserFeed?: Maybe<UserFeed>,
  delUserFeed?: Maybe<UserFeed>,
};


export type MutationAddUserArgs = {
  uid: Scalars['String'],
  email: Scalars['String'],
  username: Scalars['String']
};


export type MutationUpdateUserArgs = {
  uid: Scalars['String'],
  username?: Maybe<Scalars['String']>,
  qnaPoint?: Maybe<Scalars['String']>
};


export type MutationDelUserArgs = {
  uid: Scalars['String']
};


export type MutationAddUserFeedArgs = {
  userId: Scalars['String'],
  content: Scalars['String']
};


export type MutationUpdateUserFeedArgs = {
  userId: Scalars['String'],
  content?: Maybe<Scalars['String']>
};


export type MutationDelUserFeedArgs = {
  userId: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  getUser?: Maybe<User>,
  getUserFeed?: Maybe<UserFeed>,
};


export type QueryGetUserArgs = {
  uid: Scalars['String']
};


export type QueryGetUserFeedArgs = {
  uid?: Maybe<Scalars['String']>,
  limit: Scalars['Int'],
  page: Scalars['Int']
};

export type User = {
   __typename?: 'User',
  id?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  qnaPoint?: Maybe<Scalars['Int']>,
  userSearhedWord_1?: Maybe<Scalars['String']>,
  userSearhedWord_2?: Maybe<Scalars['String']>,
  userSearhedWord_3?: Maybe<Scalars['String']>,
};

export type UserFeed = {
   __typename?: 'UserFeed',
  id?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  userId?: Maybe<Scalars['Int']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  User: ResolverTypeWrapper<User>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  UserFeed: ResolverTypeWrapper<UserFeed>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Mutation: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  User: User,
  Int: Scalars['Int'],
  UserFeed: UserFeed,
  Date: Scalars['Date'],
  Mutation: {},
  Boolean: Scalars['Boolean'],
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationAddUserArgs, 'uid' | 'email' | 'username'>>,
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'uid'>>,
  delUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDelUserArgs, 'uid'>>,
  addUserFeed?: Resolver<Maybe<ResolversTypes['UserFeed']>, ParentType, ContextType, RequireFields<MutationAddUserFeedArgs, 'userId' | 'content'>>,
  updateUserFeed?: Resolver<Maybe<ResolversTypes['UserFeed']>, ParentType, ContextType, RequireFields<MutationUpdateUserFeedArgs, 'userId'>>,
  delUserFeed?: Resolver<Maybe<ResolversTypes['UserFeed']>, ParentType, ContextType, RequireFields<MutationDelUserFeedArgs, 'userId'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'uid'>>,
  getUserFeed?: Resolver<Maybe<ResolversTypes['UserFeed']>, ParentType, ContextType, RequireFields<QueryGetUserFeedArgs, 'limit' | 'page'>>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  uid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  qnaPoint?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  userSearhedWord_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userSearhedWord_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userSearhedWord_3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UserFeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserFeed'] = ResolversParentTypes['UserFeed']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UserFeed?: UserFeedResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
