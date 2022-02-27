import cluster from 'cluster';
import http from 'http';
import {cpus} from 'os';
import process from 'process';

const numCPUs = cpus().length;

console.log(numCPUs);
