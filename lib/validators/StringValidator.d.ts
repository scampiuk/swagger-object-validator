/// <reference types="bluebird" />
import * as Swagger from 'swagger-schema-official';
import * as Promise from 'bluebird';
import { IValidatorConfig } from '../configuration-interfaces/validator-config';
import { ITraceStep, IConstraintsError } from '../result';
export declare function validateString(test: string, schema: Swagger.Schema, spec: Swagger.Spec, config: IValidatorConfig, trace: Array<ITraceStep>): Promise<Array<IConstraintsError>>;
