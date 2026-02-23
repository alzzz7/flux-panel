import { post } from './client';

export const getSubscriptionToken = () => post('/xray/sub/token');
export const getSubscriptionLinks = () => post('/xray/sub/links');
export const resetSubscriptionToken = () => post('/xray/sub/reset');
