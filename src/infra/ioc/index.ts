import { AxiosHttpClient } from "@/infra/http/axios";
import { IHttpClient } from "@/infra/http/contracts/http-client";
import { Container } from "inversify";
import AuthService from "../services/auth";
import { IAuthService } from "../services/contracts/auth";
import ProductService from "../services/product";
import { IProductService } from "../services/contracts/product";

const iocContainer = new Container({ defaultScope: 'Singleton' });

iocContainer.bind<IHttpClient>('HttpClient').to(AxiosHttpClient);
iocContainer.bind<IAuthService>('AuthService').to(AuthService);
iocContainer.bind<IProductService>('ProductService').to(ProductService);

export { iocContainer };