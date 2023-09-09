import Swal from "sweetalert2";

const handleResponse = async (
  resp: Response,
  setDisabledButton: (disabled: boolean) => void,
  setError: (error: string) => void,
  editingMode: boolean,
  EditingModeDispatch: any,
  sharedValueDispatch: any,
  reset: any,
  mutate?: any,
  selectedPart?: string
) => {
  if (resp.ok) {
    setDisabledButton(false);
    setError("");
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    }).fire({
      icon: "success",
      title: editingMode ? "Edition completed!" : "New part added",
    });

    if (editingMode) {
      EditingModeDispatch({
        type: "EDIT_MODE",
        payload: false,
        id: undefined,
        part: undefined,
      });
    } else {
      mutate && mutate(`/api/parts?part=${selectedPart}`);
    }

    sharedValueDispatch({
      type: "",
      group: "RESET_VALUES",
      payload: "",
    });
    reset({ keepDefaultValues: editingMode });
  } else if (resp.status === 404 || resp.status === 500) {
    setDisabledButton(false);
    const errorData = await resp.json();
    setError(errorData);

    throw new Error(errorData);
  }
};

export default handleResponse;
