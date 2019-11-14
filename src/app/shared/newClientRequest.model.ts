export class NewClientRequest {
    constructor(public ClientId: string, public ClientName: string, public ProgramGroup:string, public Program:string, public UpdatedBy:string, public ClientTenantId:string, public ProgramId:string, public ClientClassicId:String) {}
  }