const FormNews = {
  print(result) {
    return /* html */`<div class="mx-auto">
    <div class=" min-w-full">
      <div class="mt-5 md:mt-0 min-w-full">
        <form action="" method="GET" class="w-full">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="grid grid-cols-3 gap-96">
                <div class=" col-start-1 col-end-3">
                    <label for="title" class="block text-sm font-bold text-gray-700">
                    Title
                    </label>
                    <div class="mt-1">
                        <input id="title" name="title" autofocus rows="3" cols="90" value="${result !== null ? result.title : ''}" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Write down your title here..."/>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                        Brief title for your news. Need to be short
                    </p>
                </div>
              </div>
  
              <div>
                <label for="describe" class="block text-sm font-bold text-gray-700">
                  Describee
                </label>
                <div class="mt-1">
                  <input id="describe" name="describe" value="${result !== null ? result.desc : ''}"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-1 inline-block w-full h-32 sm:text-sm border border-gray-300 rounded-md" placeholder="Write something here..."/>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>
  
              <div>
                <label class="block text-sm font-bold text-gray-700">
                  Photo
                </label>
                <div class="mt-1 flex items-center">
                  <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <img src="${result !== null ? result.img : ''}" alt=""/>
                    </span>
                  <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Change
                  </button>
                </div>
              </div>
  
              <div>
                <label class="block text-sm font-bold text-gray-700">
                  Cover photo
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only">
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button id="btn-submit" data-id= ${result !== null ? result.id : ''} type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>`;
  },
};
export default FormNews;
