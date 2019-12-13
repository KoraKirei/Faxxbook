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


export type Feed = {
   __typename?: 'Feed',
  id: Scalars['ID'],
  content: Scalars['String'],
  userId: Scalars['Int'],
  createdAt: Scalars['Date'],
  updatedAt: Scalars['Date'],
};

export type Mutation = {
   __typename?: 'Mutation',
  loginUser?: Maybe<User>,
  updateUser?: Maybe<User>,
  delUser?: Maybe<User>,
  addFeed?: Maybe<Feed>,
  updateFeed?: Maybe<Feed>,
  delFeed?: Maybe<Feed>,
};


export type MutationLoginUserArgs = {
  id: Scalars['ID'],
  email?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  profilePhotoUrl?: Maybe<Scalars['String']>,
  coverPhotoUrl?: Maybe<Scalars['String']>
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'],
  username?: Maybe<Scalars['String']>,
  profilePhotoUrl?: Maybe<Scalars['String']>,
  coverPhotoUrl?: Maybe<Scalars['String']>,
  qnaPoint?: Maybe<Scalars['Int']>
};


export type MutationDelUserArgs = {
  id: Scalars['ID']
};


export type MutationAddFeedArgs = {
  userId: Scalars['ID'],
  content: Scalars['String']
};


export type MutationUpdateFeedArgs = {
  id: Scalars['ID'],
  content?: Maybe<Scalars['String']>
};


export type MutationDelFeedArgs = {
  id: Scalars['ID']
};

export type Query = {
   __typename?: 'Query',
  getUser?: Maybe<User>,
  getFeed?: Maybe<Feed>,
};


export type QueryGetUserArgs = {
  id: Scalars['ID']
};


export type QueryGetFeedArgs = {
  id: Scalars['ID'],
  uid?: Maybe<Scalars['String']>,
  limit: Scalars['Int'],
  page: Scalars['Int']
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  username: Scalars['String'],
  profilePhotoUrl: Scalars['String'],
  coverPhotoUrl?: Maybe<Scalars['String']>,
  qnaPoint: Scalars['Int'],
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
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
  ID: ResolverTypeWrapper<Scalars['ID']>,
  User: ResolverTypeWrapper<User>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Feed: ResolverTypeWrapper<Feed>,
  Mutation: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ID: Scalars['ID'],
  User: User,
  String: Scalars['String'],
  Int: Scalars['Int'],
  Date: Scalars['Date'],
  Feed: Feed,
  Mutation: {},
  Boolean: Scalars['Boolean'],
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type FeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feed'] = ResolversParentTypes['Feed']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  loginUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'id'>>,
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id'>>,
  delUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDelUserArgs, 'id'>>,
  addFeed?: Resolver<Maybe<ResolversTypes['Feed']>, ParentType, ContextType, RequireFields<MutationAddFeedArgs, 'userId' | 'content'>>,
  updateFeed?: Resolver<Maybe<ResolversTypes['Feed']>, ParentType, ContextType, RequireFields<MutationUpdateFeedArgs, 'id'>>,
  delFeed?: Resolver<Maybe<ResolversTypes['Feed']>, ParentType, ContextType, RequireFields<MutationDelFeedArgs, 'id'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>,
  getFeed?: Resolver<Maybe<ResolversTypes['Feed']>, ParentType, ContextType, RequireFields<QueryGetFeedArgs, 'id' | 'limit' | 'page'>>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  profilePhotoUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  coverPhotoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  qnaPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType,
  Feed?: FeedResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
