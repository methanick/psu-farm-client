import { GoogleMapModule } from "./google-map.module";

describe('GoogleMapModule', () => {
  let GoogleMapModule: GoogleMapModule;

  beforeEach(() => {
    GoogleMapModule = new GoogleMapModule();
  });

  it('should create an instance', () => {
    expect(GoogleMapModule).toBeTruthy();
  });
});
