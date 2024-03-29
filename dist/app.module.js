"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const api_module_1 = require("./api.module");
const app_controller_1 = require("./app.controller");
const app_gateway_1 = require("./app.gateway");
const date_scalar_1 = require("./shared/date.scalar");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                context: ({ req }) => ({ headers: req.headers }),
            }),
            api_module_1.ApiModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_gateway_1.AppGateway, date_scalar_1.DateScalar],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map