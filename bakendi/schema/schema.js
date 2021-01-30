import graphql from "graphql";
import { query } from "../db.js";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    full_name: { type: GraphQLString },
    role: { type: GraphQLString },
    date: { type: GraphQLString },
    routes_climbed: { type: GraphQLString },
    routes_posted: { type: GraphQLString },
  }),
});

const RouteType = new GraphQLObjectType({
  name: "Route",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    grade: { type: GraphQLString },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    style: { type: GraphQLString },
    date: { type: GraphQLString },
    sector: {
      type: SectorType,
      async resolve(parent, args) {
        const data = await query("SELECT * FROM sector WHERE id = $1", [
          parent.sector_id,
        ]);
        return data[0];
      },
    },
    area: {
      type: AreaType,
      async resolve(parent, args) {
        const data = await query("SELECT * FROM area WHERE id = $1", [
          parent.area_id,
        ]);
        return data[0];
      },
    },
  }),
});

const SectorType = new GraphQLObjectType({
  name: "Sector",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    url: { type: GraphQLString },
    date: { type: GraphQLString },
    routes: {
      type: new GraphQLList(RouteType),
      async resolve(parent, args) {
        const data = await query("SELECT * FROM route WHERE sector_id = $1", [
          parent.id,
        ]);
        return data;
      },
    },
    area: {
      type: new GraphQLList(AreaType),
      async resolve(parent, args) {
        const data = await query("SELECT * FROM area WHERE sector_id = $1", [
          parent.id,
        ]);
        return data;
      },
    },
  }),
});

const AreaType = new GraphQLObjectType({
  name: "Area",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    url: { type: GraphQLString },
    date: { type: GraphQLString },
    sectors: {
      type: new GraphQLList(SectorType),
      async resolve(parent, args) {
        const data = await query("SELECT * FROM sector WHERE area_id = $1", [
          parent.id,
        ]);
        return data;
      },
    },
    routes: {
      type: new GraphQLList(RouteType),
      async resolve(parent, args) {
        const data = await query("SELECT * FROM route WHERE area_id = $1", [
          parent.id,
        ]);
        return data;
      },
    },
  }),
});

const LandshlutiType = new GraphQLObjectType({
  name: "Landshluti",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    date: { type: GraphQLString },
    summer_areas: {
      type: new GraphQLList(AreaType),
      async resolve(parent, args) {
        const areaID = await query(
          "SELECT summer_areas_id FROM landshluti WHERE id = $1",
          [parent.id]
        );
        const areas = [];
        if (areaID[0].summer_areas_id) {
          for (const area of areaID[0].summer_areas_id) {
            const data = await query("SELECT * FROM area WHERE id = $1", [
              area,
            ]);
            areas.push(data[0]);
          }
          return areas;
        } else {
          return null;
        }
      },
    },
    winter_areas: {
      type: new GraphQLList(AreaType),
      async resolve(parent, args) {
        const areaID = await query(
          "SELECT winter_areas_id FROM landshluti WHERE id = $1",
          [parent.id]
        );
        const areas = [];
        if (areaID[0].winter_areas_id) {
          for (const area of areaID[0].winter_areas_id) {
            const data = await query("SELECT * FROM area WHERE id = $1", [
              area,
            ]);
            areas.push(data[0]);
          }
          return areas;
        } else {
          return null;
        }
      },
    },
  }),
});

const ModelType = new GraphQLObjectType({
  name: "Model",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    cam_x: { type: GraphQLString },
    cam_y: { type: GraphQLString },
    cam_z: { type: GraphQLString },
    season: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const data = await query(
          "SELECT * FROM registered_user WHERE id = $1",
          [args.id]
        );
        return data[0];
      },
    },
    users: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {
        const data = await query("SELECT * FROM registered_user", []);
        return data;
      },
    },
    route: {
      type: RouteType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const data = await query("SELECT * FROM route WHERE id = $1", [
          args.id,
        ]);
        return data[0];
      },
    },
    routes: {
      type: new GraphQLList(RouteType),
      async resolve(parent, args) {
        const data = await query("SELECT * FROM route", []);
        return data;
      },
    },
    sector: {
      type: SectorType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const data = await query("SELECT * FROM sector WHERE id = $1", [
          args.id,
        ]);
        return data[0];
      },
    },
    area: {
      type: AreaType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const data = await query("SELECT * FROM area WHERE id = $1", [args.id]);
        return data[0];
      },
    },
    areas: {
      type: new GraphQLList(AreaType),
      async resolve(parent, args) {
        const data = await query("SELECT * FROM area", []);
        return data;
      },
    },
    landshluti: {
      type: LandshlutiType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const data = await query("SELECT * FROM landshluti WHERE id = $1", [
          args.id,
        ]);
        return data[0];
      },
    },
    landshlutis: {
      type: new GraphQLList(LandshlutiType),
      async resolve(parent, args) {
        const data = await query("SELECT * FROM landshluti", []);
        return data;
      },
    },
    model: {
      type: ModelType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const data = await query("SELECT * FROM model WHERE id = $1", [
          args.id,
        ]);
        return data[0];
      },
    },
    models: {
      type: new GraphQLList(ModelType),
      async resolve(parent, args) {
        const data = await query("SELECT * FROM model", []);
        return data;
      },
    },
  },
});

export const Schema = new GraphQLSchema({
  query: RootQuery,
});
