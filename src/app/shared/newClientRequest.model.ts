export class NewClientRequest {
    constructor(public clientName:string,public TenantId:string,public ClientId:string, public programGroup:string, public program: string, public updatedBy: string) {}
  }